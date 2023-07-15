import React from 'react';

export const Register = () => {
  return (
    <div>
      <form>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">register</button>
      </form>
    </div>
  );
};
