export function Header() {
  return (
    <header class="sticky top-0 z-50">
      <div class="navbar bg-base-100 shadow-sm">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl" href="/">CharmedScout</a>
        </div>
        <div class="flex-none">
          <label class="btn" htmlFor="my_modal_6">
            <a href="/login">Log In</a>
          </label>
        </div>
      </div>

    </header>
  );
}
