import React, { useMemo, useState } from "react";
import tipsData from "../../utils/tips.json";
import { Link } from "react-router-dom";
import Searching from "../../components/Common/searching";
import toast from "react-hot-toast";
import Pagination from "../../components/Common/pagination";

const PageSize = 6;
function Tips() {
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredArticle, setFilteredArticle] = useState([]);

  function handleFilterChange(e) {
    setFilter(e.target.value);
  }

  const totalCount = filter ? filteredArticle.length : tipsData.length;

  const currentTableData = useMemo(() => {
    const firstItemIndex = (currentPage - 1) * PageSize;
    const lastItemIndex = firstItemIndex + PageSize;
    return filteredArticle.length > 0
      ? filteredArticle.slice(firstItemIndex, lastItemIndex)
      : tipsData.slice(firstItemIndex, lastItemIndex);
  }, [currentPage, filteredArticle]);

  function handleFilterSubmit(e) {
    e.preventDefault();
    const filteredItems = tipsData.filter((item) =>
      item.judul.toLowerCase().includes(filter.toLowerCase())
    );
    if (filteredItems.length === 0) {
      toast.error(`No Results: ${filter}`);
    } else {
      setFilteredArticle(filteredItems);
      setCurrentPage(1);
    }
  }

  return (
    <section className="container mx-auto flex justify-center items-center max-w-7xl px-4 pb-20">
      <div>
        <div className="flex justify-center">
          <div>
            <Searching
              title="Mari Membaca"
              about="Beberapa manfaat membaca buku, salah satunya anda mendapat banyak referensi yang berguna kedepannya, sehingga buku disebut jendela dunia"
              handleSubmit={handleFilterSubmit}
              filter={filter}
              handleFilter={handleFilterChange}
              filterData={filteredArticle}
            />
          </div>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentTableData.map((tips) => (
              <div key={tips.slug}>
                <Link
                  to={"/tips/" + tips.slug}
                  className="text-decoration-none text-black"
                >
                  <div className="bg-white rounded-lg border overflow-hidden">
                    <img
                      src={
                        window.location.origin +
                        "/assets/images/tips/" +
                        tips.thumbnail
                      }
                      alt={tips.judul}
                      className="w-full h-auto"
                    />
                    <div className="py-5 px-4">
                      <h5 className="text-lg font-semibold">{tips.judul}</h5>
                      <p className="text-gray-500 font-sans">{tips.tanggal}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalCount={totalCount}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </section>
  );
}

export default Tips;
