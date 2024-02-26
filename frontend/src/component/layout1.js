import { NavLink, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
function Layout1() {
    return (
        <div>
            {/* 화면상단에 고정할것  Outlet태그에 컴포넌트출력 */}
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="javascript:void(0)">
                        Logo
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mynavbar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    href="javascript:void(0)"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    href="javascript:void(0)"
                                    to="/board/list"
                                >
                                    게시판
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/board/day6">
                                    카카오 이미지 검색
                                </NavLink>
                            </li>
                        </ul>
                        <div class="d-flex">
                            <ul class="navbar-nav me-auto">
                                <li class="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        href="javascript:void(0)"
                                    >
                                        Link
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        href="javascript:void(0)"
                                    >
                                        Link
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        href="javascript:void(0)"
                                    >
                                        Link
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
            {/* 컴포넌트가 출력되는 위치*/}
            <footer>저작권에 나한테 있음</footer>
        </div>
    );
}
export default Layout1;
