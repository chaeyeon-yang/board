package com.example.board;

import org.springframework.stereotype.Repository;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor //생성자 생성
//Entity - DB테이블과 연결(설계) Dto-파라미터 주고 받을때
public class BoardDto {
    int id;
    String title="";
    String writer="";
    String contents="";
    String wdate="";

    public BoardDto(int id, String title, String writer, String contents, String wdate) {
        super();
        this.id = id;
        this.title = title;
        this.writer = writer;
        this.contents = contents;
        this.wdate = wdate;
    }

}
