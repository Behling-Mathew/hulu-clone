import Image from "next/image";
import HeaderItem from "./HeaderItem";
import logo from "../assets/hulu-clone-logo.svg";
import tmdbLogo from "../assets/tmdb-logo.svg";
import styled from "styled-components";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const TMDBLogo = styled(Image)`
  //object-fit: none;
  max-width: 101px;
`;
const AttributionContainer = styled.div`
  max-width: 120px;
`;
const AttributionP = styled.p`
  font-size: 0.6rem;
`;

const Header = () => {
  return (
    <header
      className="flex flex-col sm:flex-row m-5 justify-between
    items-center h-auto"
    >
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem
          title="HOME"
          Icon={HomeIcon}
          onClick={() => router.push(`/?genre=fetchTrending`)}
          toTrending={true}
        />
        <HeaderItem
          title="TRENDING"
          Icon={LightningBoltIcon}
          toTrending={true}
        />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <div
        className="flex flex-col items-center pr-4"
        style={{ minWidth: "150px" }}
      >
        <Image
          className="min-w-full"
          src={logo}
          width={150}
          height={100}
          alt="Hulu Clone Logo"
        />
      </div>
      <AttributionContainer className="flex flex-col">
        <TMDBLogo
          className="dbLogo"
          src={tmdbLogo}
          width={100}
          alt="TMDB Logo"
        />
        <AttributionP className="leading-none pt-2 max-w-xs">
          This product uses the TMDb API but is not endorsed or certified by
          TMDb.
        </AttributionP>
      </AttributionContainer>
    </header>
  );
};

export default Header;
