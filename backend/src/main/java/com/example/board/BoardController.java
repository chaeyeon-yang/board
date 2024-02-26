package com.example.board;

import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/board")
public class BoardController {
    @Resource(name="boardDao")
    BoardDao boardDao;

    // http://localhost:8080/board/list
    @GetMapping("/list")
    public List<BoardDto> getList() {
        return boardDao.getList();
    }

    // node ==> /board/view/1 -> /board/view/:id
    // spring ==> /board/view/1 -> board/view/{id}

    @GetMapping("/view/{id}")
    public BoardDto getView(@PathVariable("id") int id) {
        return boardDao.getView(id);
    }

    @PostMapping("/save")
    // JSON으로 받고자 할 때 @RequestBody -> jquery
    // 의 $.ajax는 데이터를 보낼 때 www-urlencoded json으로 안보낸다.
    // 디폴트 json이 아님, 대신에 axios는 json임
    public BoardDto Save(@RequestBody BoardDto dto) {
        boardDao.insert(dto);
        return dto;
    }
}
