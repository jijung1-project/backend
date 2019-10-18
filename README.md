# Assignment Report

학번: 201420993

이름: 황재완

---

## Exercise1

![Screen Shot 2019-10-10 at 6.21.01 AM](./img/Screen Shot 2019-10-10 at 6.21.01 AM.png)

router를 이용하여 upload 페이지에서 id와 사진파일을 입력한다.

![Screen Shot 2019-10-10 at 6.24.31 AM](./img/Screen Shot 2019-10-10 at 6.24.31 AM.png)

서버의 uploads static folder에 입력한 사진이 위치하게되고 입력된 id와 사진파일의 이름을 하나로 묶어 배열`arr`에 저장하고 check/id 페이지의 result.html에 `res.render('result.html',{id:id, src:src})` 와 같이 매개변수로 넘겨준다.

![Screen Shot 2019-10-10 at 6.26.25 AM](./img/Screen Shot 2019-10-10 at 6.26.25 AM.png)

check페이지에는 위에서 사용한 id와 사진을 묶어서 저장한 배열의 첫번째 원소부터 마지막 원소까지 다음과 같은 방법으로 모두 출력하였다.

```javascript
res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
res.write("<!DOCTYPE html>");
res.write("<html>");
res.write(" <head>");
res.write("     <title>page</title>");
res.write(" </head>");
res.write(" <body>");
res.write("<ul>")
console.log(arr.length);
for(i=0; i<arr.length;i++){ #연속해서 이미지와 id를 출력한다.
  let url = "\'"+"http://localhost:5001/"+arr[i][1]+"\'";
  res.write(" <h1> id : " + arr[i][0] + "</h1>");
  res.write("<img src="+url+">");
  res.write("<br>");
}
res.write("</ul>");
res.write(" </body>");
res.write("</html>");
res.end();
```



---

## Exercise2

![Screen Shot 2019-10-10 at 6.29.17 AM](./img/Screen Shot 2019-10-10 at 6.29.17 AM.png)

router를 이용해서 signup 페이지에서 회원가입를 진행하며 name과 password를 적고 회원가입 버튼을 누르면 Post method로 연결된 router에 입력한 정보가 submit된다.

![Screen Shot 2019-10-10 at 6.33.48 AM](./img/Screen Shot 2019-10-10 at 6.33.48 AM.png)

Name:Ryu Hyunjin, Password: ryu999인 새로운 entry가 추가되었다.

![Screen Shot 2019-10-10 at 6.29.36 AM](./img/Screen Shot 2019-10-10 at 6.29.36 AM.png)

body-parser를 통해 입력된 정보를 얻고 mysql database와 connection을 생성하여 다음과 같이 2번의 Promise를 이용하여 먼저 database에 새로운 회원가입정보를 입력하고 입력된 정보를 포함하여 모든 회원정보를 가져온다. nodejs의 비동기적 실행 특성으로 인해 사용하였다. 가져온 정보들은 print 페이지로 라우팅 하여 name만 출력해준다.

![Screen Shot 2019-10-10 at 6.30.14 AM](./img/Screen Shot 2019-10-10 at 6.30.14 AM.png)

login 페이지에서 기존에 등록한 회원정보가 입력됬을때

![Screen Shot 2019-10-10 at 6.30.25 AM](./img/Screen Shot 2019-10-10 at 6.30.25 AM.png)

login/result 페이지로 라우팅하여 로그인 성공 메시지를 출력한다.

![Screen Shot 2019-10-10 at 6.30.43 AM](./img/Screen Shot 2019-10-10 at 6.30.43 AM.png)

하지만 기존에 등록한 회원정보가 아닌 정보로 로그인을 시도하면

![Screen Shot 2019-10-10 at 6.30.57 AM](./img/Screen Shot 2019-10-10 at 6.30.57 AM.png)

등록된 아이디가 아니라고 메시지를 출력해준다.

![Screen Shot 2019-10-10 at 6.31.19 AM](./img/Screen Shot 2019-10-10 at 6.31.19 AM.png)

print 페이지로 바로 접속하면 지금까지 저장된 모든 회원의 name을 출력해준다.