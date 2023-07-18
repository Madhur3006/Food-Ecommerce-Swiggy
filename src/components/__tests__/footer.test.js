import Footer from "../Footer";
import { render } from "@testing-library/react";

test("testing Footer", () => {
    const footer = render(<Footer />)
    const data = footer.getByTestId('footer')
    expect(data.innerHTML).toBe('Footer')
})