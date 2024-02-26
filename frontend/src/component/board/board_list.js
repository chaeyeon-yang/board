import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function BoardList() {
    // 최소한 배열이 필요
    const [boardlist, setBoardList] = useState([]);
    const [loading, setLoading] = useState(false);
    const hosturl = process.env.REACT_APP_HOST_IP;

    let loadData = async () => {
        let url = hosturl + "/board/list";
        let result = await axios.get(url);
        setBoardList(result.data);
        console.log(result.data);
        setLoading(true);
    };

    // 데이터 통신 - 데이터 바인딩, mount 할 때, unmount 할 때, 변수 값들이 바뀔때 호출된다.
    // 두 번 째 매개변수인 배열에 내가 감시하고자하는 변수
    // 배열의 경우에는 내부적으로 배열의 주소가 계속 바뀌어서
    // 무한렌더링

    // useEffect(()=>{}) // 무한렌더링
    // useEffect(() => {}, []) // 처음에 컴포넌트 나타날 때, 사라질 때
    // useEffect(() => {}, [변수]) // 변수 값이 바뀔때마다 호출
    // useEffect(() => {}, [배열]) // 배열은 참조의 참조라서 데이터 통신해서 배열 주소가 바뀐다. 무한 렌더링 상태
    //
    // loading => 맨처음 컴포넌트가 나타날 때 boardList.map 함수가 boardList 객체가 만들어 지지 않아서
    // undefined가 되는 상태가 발생
    // loading = false로 놓고 네트워크 통신할 때 true로 놓고
    // BoardList.map을 사용할 때 loading true일 때 출력하면 항상 성공
    useEffect(() => {
        // 1. ajax 통신 수단 (fetch, axios, xmlhttprequest)
        // let url = hosturl + "/board/list";
        // // axios
        // //     .get(url)
        // //     .then((res) => {
        // //         setLoading(!loading); // 토글 시킴
        // //     })
        // //     .catch((error) => {});
        // // await를 사용할 때 주의 점 await를 사용하는 함수에 반드시 async가 있어야 한다.
        // let result = await axios.get(url);
        // setBoardList(result.data);
        // setLoading(!loading);
        loadData();
    }, []);

    return (
        <div className="container" style={{ "margin-top": "80px" }}>
            <h2>게시판 목록</h2>

            <div className="input-group mb-3" style={{ "margin-top": "20px" }}>
                <button
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                >
                    선택하세요
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a className="dropdown-item" href="#">
                            제목
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            내용
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            제목+내용
                        </a>
                    </li>
                </ul>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                />
                <button className="btn btn-secondary" type="submit">
                    Go
                </button>
            </div>

            <table className="table table-hover ">
                <colgroup>
                    <col width="8%"></col>
                    <col width=""></col>
                    <col width="12%"></col>
                    <col width="12%"></col>
                </colgroup>
                <thead>
                    <th>아이디</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                </thead>
                <tbody>
                    {loading ? (
                        boardlist.map((boardItem, key) => {
                            return (
                                <tr key={key}>
                                    <td>{boardItem.id}</td>
                                    <td>
                                        <Link
                                            to={"/board/view/" + boardItem.id}
                                        >
                                            {boardItem.title}
                                        </Link>
                                    </td>
                                    <td>{boardItem.writer}</td>
                                    <td>{boardItem.wdate}</td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colspan="4">데이터가 없습니다.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <ul className="pagination  justify-content-center">
                <li className="page-item disabled">
                    <a className="page-link" href="#">
                        first
                    </a>
                </li>
                <li className="page-item disabled">
                    <a className="page-link" href="#">
                        Previous
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        1
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        2
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        3
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        4
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        5
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        Next
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        last
                    </a>
                </li>
            </ul>

            <div className="container mt-3" style={{ textAlign: "right" }}>
                <Link to="/board/write" className="btn btn-secondary">
                    글쓰기
                </Link>
            </div>
        </div>
    );
}
export default BoardList;
