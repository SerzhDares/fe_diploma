import { Logo } from "../Logo";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";
import { GeneralSearchForm } from "./GeneralSearchForm";

export const GeneralHeader = () => {
  return (
    <header className="header trains_header" id="header">
        <div className="container">
          <Logo logoClass="logo"/>
        </div>
        <HeaderMenu/>
        <GeneralSearchForm/>
    </header>
  )
}
