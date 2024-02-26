package com.example.board;

import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.List;

// 디비에 데이터 읽고 쓰기
@Repository("boardDao") // @Repository: Dao에 꼭 붙여야함
// 객체 만들어서 객체가 저장된 메모리에 접근할 때 boardDao를 찾음
public class BoardDao {
    List<BoardDto> list = new ArrayList<BoardDto>();
    public BoardDao() {
        for (int i=1; i<=15; i++) {
            list.add(new BoardDto(i,"제목"+i, "작성자"+i,
                    "내용"+i, "2024-02-22"));
        }
    }
   public List<BoardDto> getList() {
        return list;
    }
    BoardDto getView(int id) {
        // stream 으로 전환시켜야 filter 함수를 쓸 수 있다.
        // 대용량 실시간 데이터 처리, 대용량 텍스트 파일에서 stream을 사용한다.
        @SuppressWarnings("unchecked")
        List<BoardDto> resultList = (List<BoardDto>) list.stream().filter((BoardDto dto) -> {
            if (id == dto.getId()) return true;
            return false;
        }).toList();  // Stream으로 반환한다. Stream을 List로 전환하기
        return resultList.get(0);
    }

    void insert(BoardDto dto) {
        int id = list.get(list.size()-1).getId()+1;
        // 맨 마지막 데이터의 id 값을 가져와서 증가시킨다.
        // 클라이언트가 id 값을 직접 부여하지 못한다.
        dto.setId(id);
        list.add(dto); // 배열에 추가
    }

}
