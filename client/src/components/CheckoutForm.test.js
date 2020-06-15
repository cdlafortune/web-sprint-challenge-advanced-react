import React from "react";
import { render, screen, getByTestId, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const wrapper = render(<CheckoutForm/>);
    const header = screen.getByTestId("checkout-header");
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const wrapper = render(<CheckoutForm/>);
    const firstName = screen.getByTestId("firstName");
    const lastName = screen.getByTestId("lastName");
    const address = screen.getByTestId("address");
    const city = screen.getByTestId("city");
    const myState = screen.getByTestId("state");
    const zip = screen.getByTestId("zip");
    const btn = screen.getByTestId("submit-btn");
    


    fireEvent.change(firstName, {target: {value:"Walter"}});
    fireEvent.change(lastName, {target: {value:"White"}});
    fireEvent.change(address, {target: {value:"308 Negra Arroyo Lane"}});
    fireEvent.change(city, {target: {value:"Albuquerque"}});
    fireEvent.change(myState, {target: {value: "New Mexico"}});
    fireEvent.change(zip, {target: {value:"87101"}});
    fireEvent.click(btn);
    const success = screen.getByTestId("successMessage");

    expect(success).toBeInTheDocument();


});
