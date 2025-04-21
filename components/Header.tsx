import React from "react";

const Header = () => {
  const name = "Priyanshu"
  return (
    <main className="flex justify-between p-5">
      <section>
        <img src="/logo.svg" alt="" />
      </section>
      <section className="font-semibold">{`All The Best ${name}!`}</section>
    </main>
  );
};

export default Header;
