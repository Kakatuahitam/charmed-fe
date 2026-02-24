export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl" href="/">CharmedScout</a>
        </div>
        <div className="flex-none">
          <label className="btn" htmlFor="my_modal_6">
            <a href="/login">Log In</a>
          </label>
        </div>
      </div>

    </header>
  );
}
