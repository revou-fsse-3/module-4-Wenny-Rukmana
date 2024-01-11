const HomeContainer = () => {
  const handleInsertToken = () => {
    localStorage.setItem("token", "asdasdas");
  };
  return (
    <div>
      <h1>Ini halaman Publik</h1>
      <button onClick={handleInsertToken}>Login</button>
    </div>
  );
};

export default HomeContainer;
