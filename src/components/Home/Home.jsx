import { HomeContainer, HomeImageBackground, HomeText } from "./Home.style";

function Home() {
  return (
    <HomeContainer>
      <HomeImageBackground
        src={
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwbmF0dXJlfGVufDB8fDB8fHww"
        }
      />
      <HomeText>Explore The Beauty Of Our World</HomeText>
    </HomeContainer>
  );
}

export default Home;
