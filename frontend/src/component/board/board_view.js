import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
// board/view/:id
function BoardView() {
    let { id } = useParams();
    const [boardDetail, setBoardDetail] = useState([]);
    const [loading, setLoading] = useState(false);
    let hosturl = process.env.REACT_APP_HOST_IP;

    const loadData = async () => {
        let url = hosturl + "/board/view/" + id;
        let result = await axios.get(url);
        setBoardDetail(result.data);
        console.log(result.data);
        setLoading(true);
    };

    useEffect(() => {
        loadData();
    }, []); // 처음 한 번만 렌더링 해라 []

    return (
        <div className="container" style={{ "margin-top": "80px" }}>
            <h2>게시판 상세보기</h2>

            <table
                className="table table-hover "
                style={{ "margin-top": "30px" }}
            >
                <tbody>
                    <tr className="table-secondary">
                        <th>제목</th>
                        <td colspan="5">{boardDetail.title}</td>
                    </tr>
                    <tr>
                        <th>작성자</th>
                        <td>{boardDetail.writer}</td>
                        <th>작성일</th>
                        <td>{boardDetail.wdate}</td>
                        {/* <th>조회수</th>
                        <td>12</td> */}
                    </tr>
                    <tr>
                        <th colspan="6" className="table-secondary">
                            내용
                        </th>
                    </tr>
                    <tr>
                        <td colspan="6">
                            {/* board.contents가 null 일 수 있다. optional을 써서 이 문제를 처리
                                split("문자") 이 문자를 기준으로 문자배열을 만들어 반환한다.
                                span 태그는 inline 태그 자동줄바꿈 없이 특정 서식을 주고자 할 때 많이 사용한다.
                                map(line => <span>{line}<br></span>)
                            */}
                            {boardDetail.contents?.split("\n").map((line) => {
                                return (
                                    <span>
                                        {line}
                                        <br />
                                    </span>
                                );
                            })}
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="container mt-3" style={{ textAlign: "right" }}>
                <Link to="/board/list" className="btn btn-secondary">
                    목록
                </Link>
            </div>
        </div>
    );
}
export default BoardView;
