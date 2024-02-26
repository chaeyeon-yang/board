import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function BoardWrite() {
    let history = useNavigate();
    const [title, setTitle] = useState("");
    const [writer, setWriter] = useState("");
    const [contents, setContents] = useState("");

    const onChange = (e) => {
        switch (e.target.id) {
            case "title":
                setTitle(e.target.value);
                break;
            case "writer":
                setWriter(e.target.value);
                break;
            case "contents":
                setContents(e.target.value);
                break;
        }
    };

    const btnSave = () => {
        let url = process.env.REACT_APP_HOST_IP + "/board/save";
        axios
            .post(url, {
                title,
                writer,
                contents,
                wdate: "2024-02-23",
            })
            .then((res) => {
                //등록 후 이동을 해야한다 => list 페이지로 이동
                //location.href = "/board/list" - anchor 태그
                //스택구조임 useNavigate
                history("/board/list");
            });
    };
    return (
        <div className="container" style={{ "margin-top": "80px" }}>
            <h2>게시판 쓰기</h2>

            <table
                className="table table-hover "
                style={{ "margin-top": "30px" }}
            >
                <colgroup>
                    <col width="25%" />
                    <col width="*" />
                </colgroup>

                <tbody>
                    <tr>
                        <td>제목</td>
                        <td>
                            <div
                                className="mb-3"
                                style={{ "margin-top": "13px" }}
                            >
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"
                                    placeholder="제목을 입력하세요"
                                    value={title}
                                    onChange={onChange}
                                />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>작성자</td>
                        <td>
                            <div
                                className="mb-3"
                                style={{ "margin-top": "13px" }}
                            >
                                <input
                                    type="text"
                                    className="form-control"
                                    id="writer"
                                    name="writer"
                                    placeholder="이름을 입력하세요"
                                    value={writer}
                                    onChange={onChange}
                                />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>내용</td>
                        <td>
                            <div
                                className="mb-3"
                                style={{ "margin-top": "13px" }}
                            >
                                <textarea
                                    className="form-control"
                                    rows="5"
                                    id="contents"
                                    name="contents"
                                    value={contents}
                                    onChange={onChange}
                                >
                                    {contents}
                                </textarea>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="container mt-3" style={{ textAlign: "right" }}>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={btnSave}
                >
                    등록
                </button>
            </div>
        </div>
    );
}
export default BoardWrite;
