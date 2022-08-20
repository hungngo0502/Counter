function Button({ content, fn }) {
  return (
    <button class="btn" onClick={fn}>
      {content}
    </button>
  );
}
export default Button;
