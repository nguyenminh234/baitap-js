const ThemeContext = React.createContext("light");

function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  return <button className={theme}>Nút theo theme</button>;
}
