import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setThreads } from "../../redux/threadsSlice";
import Desainzero from "../../assets/images/Forum/Desainzero.png";
import User from "../../assets/images/Forum/User.png";
import Search from "../../components/Search";
import { format, parseISO } from "date-fns";

function Forum({show, setShow, search, setSearch}) {
  const { threads } = useSelector((state) => state.threads);
  
  const arraylike = [];
  for (let i = 0; i < threads.length; i++) {
    const element = threads[i];
    arraylike.push(element.like);
  }
  const max = Math.max(...arraylike);

  const threadLikes = threads.filter((thread) => thread.like === max);
  return (
    <div className="container max-w-7xl px-4 mx-auto z-0">
      <div className="flex justify-center py-10  lg:px-0">
          <div className="container mx-auto flex justify-center">
            <div className="w-full md:w-9/12 py-5 mt-5">
              <div className="text-center">
                <h1 className="text-3xl font-bold">Temukan Referensi</h1>
                <h1 className="text-3xl font-bold">"Buku"</h1>
                <p className="pt-4 pb-6">
                  Anda dapat menemukan beberapa buku
                  <br />
                  booklogia adalah solusi anda
                </p>
                <div className="flex justify-center items-center">
                  <Search show={search} setShow={setSearch} />
                  <Example show={show} setShow={setShow} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  pb-10 pt-0  lg:py-10 px-0 lg:px-0">
          <div className="text-decoration-none text-dark">
            <div
              key={threadLikes[0].slug}
              className="block lg:flex justify-center mt-4 mb-3 gap-6"
            >
              <img
                className="w-full lg:w-6/12 rounded-2xl"
                src={Desainzero}
                alt=""
              />
              <div className="flex items-center pt-3 sm:pt-3 md:pt-3 lg:pt-0">
                <div className="title-inside text-dark">
                  <h1 className=" text-lg lg:text-3xl font-bold">
                    {threadLikes[0].judul}
                  </h1>
                  <p className="mt-3 mb-4">
                    <span className="font-medium font-sans"></span>{" "}
                    {threadLikes[0].story}
                  </p>
                  <div className="flex items-center">
                    <img
                      src={User}
                      className="bg-secondary rounded"
                      alt=""
                      width="12%"
                    />
                    <div className="ml-2">
                      <h6>
                        By: {threadLikes[0].penulis} <br />
                        <span className="text-sub-blog">
                          {format(
                            parseISO(threadLikes[0].tanggal),
                            "dd MMM, yyyy"
                          )}
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-light py-3 px-0 lg:px-0">
          <div className=" pb-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4">
              {threads
                .slice()
                .sort((a, b) => b.id - a.id)
                .map((thread, i) => (
                  <div key={i}
                    className="text-decoration-none text-dark"
                  >
                    <div className="">
                      <img
                        className="w-full rounded-2xl"
                        src={Desainzero}
                        alt=""
                      />
                      <div className="flex items-center pt-3 text-dark">
                        <div>
                          <h1 className="text-xl font-bold">{thread.judul}</h1>
                          <p className="mt-3 mb-4">
                            <span className="font-medium"></span> {thread.story}
                          </p>
                          <div className="flex items-center">
                            <img
                              src={User}
                              className="bg-secondary rounded"
                              alt=""
                              width="12%"
                            />
                            <div className="ml-2">
                              <h6>
                                By: {thread.penulis}
                                <br />
                                <span className="text-sub-blog">
                                  {format(
                                    parseISO(thread.tanggal),
                                    "dd MMM, yyyy"
                                  )}
                                </span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
    </div>
  );
}

export default Forum;

// -------- Modal --------
export const Example = ({show, setShow}) => {
  const dispatch = useDispatch();
  const { threads } = useSelector((state) => state.threads);

  const { isAuthorized, user } = useSelector((state) => state.auth);
  const [inputThread, setInputThread] = useState({
    title: "",
    writer: "",
    date: "",
    description: "",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputThread({ ...inputThread, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let lastId = threads[threads.length - 1].id;

    const newThread = {
      judul: inputThread.title,
      id: ++lastId,
      fotobuku: "../../assets/images/Forum/Desainzero.png",
      deskripsi: inputThread.description,
      story:
        "Buku ini menjadi salah satu buku yang paling laris di antara beberapa buku terkait self improvement",
      penulis: user.nama,
      tanggal: inputThread.date,
      like: 0,
      id_user: 5,
      edit: 0,
      delete: 0,
      createAt: null,
      editAt: null,
      deleteAt: null,
      komen: [],
    };

    dispatch(setThreads(newThread));

    setInputThread({
      title: "",
      writer: "",
      date: "",
      description: "",
    });

    handleClose();
  };

  return (
    <>
      {isAuthorized && (
        <button
          onClick={handleShow}
          data-modal-target="defaultModal"
          data-modal-toggle="defaultModal"
          className="block text-white bg-danger hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          type="button"
        >
          <div className="flex justify-center items-center">Add</div>
        </button>
      )}

      {show && (
        <div
          id="defaultModal"
          tabindex="-1"
          aria-hidden="true"
          className="fixed top-1/4 lg:top-0 z-50  w-full  overflow-x-hidden overflow-y-hidden md:inset-0  max-h-full"
        >
          
          <div className="flex justify-center items-center h-full w-full px-4 sm:px-4 md:px-4 lg:px-0 xl:px-0">
            <div className="relative w-full max-w-2xl max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Terms of Service
                  </h3>
                  <button
                    onClick={handleClose}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="defaultModal"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                <div className="modal-body text-start px-4 py-6">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Judul
                      </label>
                      <input
                        type="text"
                        autoFocus
                        name="title"
                        aria-label="input-title"
                        value={inputThread.title}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Penulis
                      </label>
                      <input
                        type="text"
                        name="writer"
                        aria-label="input-penulis"
                        value={user.nama}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Tanggal
                      </label>

                      <input
                        type="date"
                        name="date"
                        aria-label="input-date"
                        value={inputThread.date}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Tentang Buku
                      </label>
                      <textarea
                        rows={3}
                        name="description"
                        xaria-label="input-description"
                        value={inputThread.description}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
