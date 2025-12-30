class App {
  // 1. 멤버 변수 (Properties)
  // : 이 클래스 내부에서 계속 써야 하는 값들을 미리 선언해두는 곳입니다.
  //   private을 붙이면 이 클래스 안에서만 쓸 수 있다는 뜻입니다.
  private $target: HTMLElement;

  // 2. 생성자 (Constructor)
  // : new App(요소) 할 때 딱 한 번 실행되는 초기화 함수입니다.
  constructor($target: HTMLElement) {
    // 전달받은 HTML 요소를 '내 주머니(this.$target)'에 저장해둡니다.
    // 그래야 다른 함수(render 등)에서도 이 요소를 꺼내 쓸 수 있습니다.
    this.$target = $target;

    // 준비가 끝났으니 바로 화면을 그립니다.
    this.render();
  }

  // 3. 메서드 (Methods)
  // : 실제 화면을 그리는 로직입니다.
  render() {
    // 아까 저장해둔 요소($target) 안에 HTML을 집어넣습니다.
    this.$target.innerHTML = `
      <header style="border-bottom: 1px solid #ddd; padding: 10px;">
        <h1>내 멋진 웹사이트</h1>
        <nav>
          <button>홈</button>
          <button>로그인</button>
        </nav>
      </header>
      
      <main style="padding: 20px;">
        <h2>환영합니다!</h2>
        <p>여기는 메인 컨텐츠가 들어갈 자리입니다.</p>
      </main>
      
      <footer style="margin-top: 20px; color: #888;">
        &copy; 2025 My Service
      </footer>
    `;
  }
}

export default App;
