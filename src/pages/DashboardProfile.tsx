import Gufron from "../../public/assets/images/Abuya-Mama-Ghufron-1951961959.webp"
import styled from 'styled-components'
export default function DashboardProfile() {

  const Judul = styled.h1`
    color: red;
    font-size: 3rem;
    font-family: "Playwrite CU", cursive;
  `

  return (
    <>
      <Judul>
        DashboardProfile
      </Judul>
      <img src={Gufron} alt="" />
    </>
  )
}
