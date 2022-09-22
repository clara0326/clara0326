var book  = "책", point = 123;

//시맨틱 Sementic : 의미를 부여하여 변수 이름 작명 

var point = 123, point = 456;

point = 789;
//JS코드는 왼쪽에서 오른쪽으로 처리. 따라서 point변숫값은 123->456->789로 바뀜.

var point = amount = 123;
//같은 값 할당. 값이 연동될수도 있기 때문에 권장 형태는 아님!
