import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function BoardDay6() {
    // 최소한 배열이 필요
    const [searchTerm, setSearchTerm] = useState("");
    const [boardlist, setBoardList] = useState([]);
    const [loading, setLoading] = useState(false);

    let loadData = async () => {
        if (searchTerm) {
            let url =
                "https://dapi.kakao.com/v2/search/image?query=" + searchTerm;
            let result = await axios.get(url, {
                headers: {
                    Authorization: "KakaoAK e126c3ee16347b56fd8d9bcaa9160ec4",
                },
            });
            console.log("제대로 온 것 인가", result);
            setBoardList(result.data.documents);
            setLoading(true);
        }

        // let result = await axios.get(url);
        // setBoardList(result.data);
        // console.log(result.data);
        // setLoading(true);
    };

    const onChange = (e) => {
        setSearchTerm(e.target.value);
        console.log(searchTerm, "??");
    };

    const onSearch = () => {
        loadData();
    };
    // useEffect(() => {
    //     loadData();
    // }, []);

    return (
        <div className="container" style={{ "margin-top": "80px" }}>
            <h2>게시판 목록</h2>

            <div className="input-group mb-3" style={{ "margin-top": "20px" }}>
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
                    placeholder="데이식스를 검색하세요"
                    onChange={(e) => onChange(e)}
                />
                <button
                    className="btn btn-secondary"
                    type="submit"
                    onClick={onSearch}
                >
                    검색
                </button>
            </div>
            <div style={{ display: "grid" }}>
                {loading ? (
                    boardlist.map((boardItem, key) =>
                        boardItem.image_url != null ? (
                            <div style={{ maxWidth: "900px" }}>
                                <img
                                    style={{ width: "150px", height: "150px" }}
                                    key={key}
                                    src={boardItem.thumbnail_url}
                                    alt={`Image ${key}`}
                                />
                            </div>
                        ) : (
                            <div key={key}></div>
                        )
                    )
                ) : (
                    <div>데이터가 없습니다.</div>
                )}
            </div>

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
export default BoardDay6;
