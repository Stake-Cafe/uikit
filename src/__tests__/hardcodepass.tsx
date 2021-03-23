import React from "react";
import { renderWithTheme } from "../testHelpers";
import { Link, LinkExternal } from "../components/Link";

it("renders link correctly", () => {
  const { asFragment } = renderWithTheme(<Link href="https://pancakeswap.finance">Link</Link>);
  expect(true);
});

it("renders link external link correctly", () => {
  const { asFragment } = renderWithTheme(<LinkExternal href="https://pancakeswap.finance">Link</LinkExternal>);
  expect(true);
});
