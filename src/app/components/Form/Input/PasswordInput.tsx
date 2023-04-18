export default function PasswordInput() {
  return (
    <div className="m-2 p-2 w-full flex flex-col md:flex-row justify-between items-center">
      <label htmlFor="password">Password</label>
      <input
        className="m-2 p-2 border focus:border-orange-500 rounded-lg  outline-none focus:outline-none text-gray-600"
        type="password"
        placeholder="your password"
        id="password"
        required
      />
    </div>
  );
}
