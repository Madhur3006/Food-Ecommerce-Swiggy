import Header from "../Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utilis/store";
import {StaticRouter} from 'react-router-dom/server'

test("online status should be online", () => {
    const header = render(
            <StaticRouter>
                <Provider store = {store}>
                    <Header />
                </Provider>
            </StaticRouter>
    )
    
    const onlineStatus = header.getByTestId("online-status")

    expect(onlineStatus.innerHTML).toBe("online")
})

test("cart should have 0 items", () => {
    const header = render(
            <StaticRouter>
                <Provider store = {store}>
                    <Header />
                </Provider>
            </StaticRouter>
    )
    
    const cart = header.getByTestId("cart")

    expect(cart.innerHTML).toBe("Cart - 0")
})

test("logo should load on every render", () => {
    const header = render(
            <StaticRouter>
                <Provider store = {store}>
                    <Header />
                </Provider>
            </StaticRouter>
    )
    
    const logo = header.getByTestId("logo")
    console.log(logo)
    expect(logo.src).toBe("https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png")
})