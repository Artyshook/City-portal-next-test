import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { fetchFooter } from "@/store/index";
import { StoreStateAll, FooterAction } from "@/store/interfaces";
import { FooterData } from "@/store/interfaces";

export const Footer = () => {
  const data: FooterData | null = useSelector(
    (state: StoreStateAll) => state.footer.data
  );
  const dispatch =
    useDispatch<ThunkDispatch<StoreStateAll, undefined, FooterAction>>();

  useEffect(() => {
    dispatch(fetchFooter());
  }, [dispatch]);
  if (!data) return null;
  return (
      <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {data.data.columns.map((column, index) => (
                  <div key={index} className="column" style={{ margin: '0 10px' }}>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                          {column.links.map((link, index) => (
                              <li key={index} style={{ marginBottom: '5px' }}>
                                  <a href={link.url} style={{ textDecoration: 'none' }}>{link.name}</a>
                              </li>
                          ))}
                      </ul>
                  </div>
              ))}
          </div>
          <div  dangerouslySetInnerHTML={{__html: data.data.address}} style={{ textAlign: 'center', marginTop: '20px' }}></div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
              <a href={data.data.facebook} style={{ margin: '0 10px', textDecoration: 'none' }}>Facebook</a>
              <a href={data.data.twitter} style={{ margin: '0 10px', textDecoration: 'none' }}>Twitter</a>
              <a href={data.data.youtube} style={{ margin: '0 10px', textDecoration: 'none' }}>Youtube</a>
              <a href={data.data.instagram} style={{ margin: '0 10px', textDecoration: 'none' }}>Instagram</a>
          </div>
          <div  style={{ textAlign: 'center', marginTop: '20px' }}>{data.data.copyright}</div>
      </footer>

  );
};
