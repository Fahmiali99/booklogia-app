import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import userdata from '../../utils/users.json';
import { toast } from 'react-toastify';
import { login } from '../../redux/authSlice';
import heroImage from '../../assets/images/hero.png';
import '../../sass/pages/_login.scss';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordType, setPasswordType] = useState('password');

    const dispatch = useDispatch();
    const history = useHistory();

    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    };

    const tooglePassword = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
            return;
        }
        setPasswordType('password');
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const dataparse = userdata.map((item) => {
            return item;
        });

        const userData = dataparse.find((user) => user.email === email);
        console.log(userData);
        if (userData) {
            if (userData.password !== password) {
                toast.error('login error periksa Password');
            } else {
                dispatch(login({ user: userData }));
                toast.success('login success');
                history.push('/');
            }
        } else {
            toast.error('login error periksa Email');
        }
    };
    return (
        <Container className="py-5 my-3">
            <Row className="align-items-center">
                <Col md={6} xl={6} className="mx-auto">
                    <h1 className="fw-bold">Let&apos;s Meet Up With</h1>
                    <h1 className="fw-bold">Your Reading Buddy !</h1>
                    <form className="form-login">
                        <div className="form-group">
                            <label className="fw-semibold" htmlFor="exampleInputEmail1">
                                Email <span className="text-danger">*</span>{' '}
                            </label>
                            <input
                                autoFocus
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-label="input-email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group my-4">
                            <label className="fw-semibold" htmlFor="exampleInputPassword1">
                                Password <span className="text-danger">*</span>
                            </label>
                            <input
                                type={passwordType}
                                className="form-control"
                                id="exampleInputPassword1"
                                aria-label="input-password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <div>
                                <input
                                    type="checkbox"
                                    checked={passwordType === 'text' ? 'checked' : ''}
                                    onChange={tooglePassword}
                                />
                                <label className="mx-1">Show Password</label>
                            </div>
                        </div>
                        <input
                            type="submit"
                            className="btn btn-danger text-white px-4 py-2"
                            disabled={!validateForm()}
                            placeholder="SIGN IN"
                            onClick={handleLogin}
                        />
                    </form>
                </Col>
                <Col md={6} xl={6} className="mx-auto">
                    <img src={heroImage} className="img-fluid" alt="" />
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
