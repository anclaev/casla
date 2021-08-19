import Wrapper from "./containers/Wrapper"
import Styles from "./styles"

const App: React.FC = () => {
  return (
    <>
      <Styles />
      <Wrapper>
        <section>Menu</section>
        <section>Page</section>
      </Wrapper>
    </>
  )
}

export default App
