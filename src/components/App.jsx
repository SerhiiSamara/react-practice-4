import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { AddPage } from 'pages/AddPage';
import { HomePage } from './HomePage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/"element={<Layout/>}>
					<Route index element={<HomePage/>} />
					<Route path="add" element={ <AddPage/>} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
