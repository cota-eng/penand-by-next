import { useState, useEffect } from "react";
import useSnackBar from "../../hooks/useSnackBar";
import Link from "next/link";
import LoginModal from "../Authentication/LoginModal";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { loginModalState } from "../../states/loginModalState";
const News = () => {
  return (
    <div className="py-10 px-10 w-full bg-yellow-50">
      <h2>お知らせ</h2>
      <div>
        <p>
          ベータ版のため、ログイン、またログインして使える機能を制限しています。
        </p>
        <p>少々お待ち下さいませ。</p>
      </div>
    </div>
  );
};

export default News;
