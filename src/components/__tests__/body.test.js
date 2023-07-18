import Body from "../Body";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utilis/store";
import { StaticRouter } from "react-router-dom/server";

test("testing simmer",() => {
    const body = render(<StaticRouter><Provider store = {store}><Body /></Provider></StaticRouter>)
    const shimmer = body.getByTestId('shimmer')
    expect(shimmer.children.length).toBe(3)
})