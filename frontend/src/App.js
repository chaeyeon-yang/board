import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout1 from "./component/layout1";
import Home from "./component/home";
import BoardList from "./component/board/board_list";
import BoardView from "./component/board/board_view";
import BoardWrite from "./component/board/board_write";
import BoardDay6 from "./component/board/board_day6";

function App() {
    console.log("ip", process.env.REACT_APP_HOST_IP);
    return (
        <div>
            {/* 라우트를 만들자 url -> 컴포넌트를 연결하자 */}
            <Routes>
                {/* 전체를 감싸는 Route 여기에 문서 전체의 레이아웃을 잡는 컴포넌트가 있어야 한다. 
                path - 기본 url이 되고 element는 저 url 선택했을 때 화면에 나올 컴포넌트*/}
                <Route path="/" element={<Layout1 />}>
                    {/* /를 따라갈 라우터들 index는 위의 부모 path 그대로 */}
                    <Route index element={<Home />}></Route>
                    <Route path="board/list" element={<BoardList />}></Route>
                    <Route
                        path="board/view/:id"
                        element={<BoardView />}
                    ></Route>
                    <Route path="board/write" element={<BoardWrite />}></Route>
                    <Route path="board/day6" element={<BoardDay6 />}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
