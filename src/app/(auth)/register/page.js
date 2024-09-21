"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import InputError from "@/components/InputError";
import Label from "@/components/Label";
import Link from "next/link";
import { useAuth } from "@/hooks/auth";
import { useState } from "react";

const Page = () => {
  const { register } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);

  const submitForm = (event) => {
    event.preventDefault();

    register({
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
      setErrors,
    });
  };

  return (
    <form onSubmit={submitForm}>
      {/* Name */}
      <div>
        <Label htmlFor="name">ユーザー名</Label>

        <Input
          id="name"
          type="text"
          value={name}
          className="block mt-2 w-full"
          onChange={(event) => setName(event.target.value)}
          required
          autoFocus
        />

        <InputError messages={errors.name} className="mt-2" />
      </div>

      {/* Email Address */}
      <div className="mt-4">
        <Label htmlFor="email">メールアドレス</Label>

        <Input
          id="email"
          type="email"
          value={email}
          className="block mt-2 w-full"
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <InputError messages={errors.email} className="mt-2" />
      </div>

      {/* Password */}
      <div className="mt-4">
        <Label htmlFor="password">パスワード</Label>

        <Input
          id="password"
          type="password"
          value={password}
          className="block mt-2 w-full"
          onChange={(event) => setPassword(event.target.value)}
          required
          autoComplete="new-password"
        />

        <InputError messages={errors.password} className="mt-2" />
      </div>

      {/* Confirm Password */}
      <div className="mt-4">
        <Label htmlFor="passwordConfirmation">パスワードを再入力</Label>

        <Input
          id="passwordConfirmation"
          type="password"
          value={passwordConfirmation}
          className="block mt-2 w-full"
          onChange={(event) => setPasswordConfirmation(event.target.value)}
          required
        />

        <InputError messages={errors.password_confirmation} className="mt-2" />
      </div>

      <div className="flex items-center justify-end mt-4">
        <Link
          href="/login"
          className="underline text-sm text-gray-400 hover:text-gray-200"
        >
          既に登録済みの方
        </Link>

        <Button className="ml-4">登録</Button>
      </div>
    </form>
  );
};

export default Page;
