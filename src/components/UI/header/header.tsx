import React from "react";
import { HomeOutlined, UserOutlined, ProjectOutlined, BookOutlined, GithubOutlined } from "@ant-design/icons";
import * as st from "./header-style";

const iconStyle = { fontSize: "2rem" };

const header: React.FC = () => (
  <>
    <st.Nav
      separator=" "
      items={[
        {
          href: "https://zemscript.github.io/",
          title: (
            <>
              <HomeOutlined style={iconStyle} />
              <st.NavText>Главная</st.NavText>
            </>
          ),
        },
        {
          href: "#",
          title: (
            <>
              <UserOutlined style={iconStyle} />
              <st.NavText>О себе</st.NavText>
            </>
          ),
        },
        {
          href: "https://zemscript.github.io/projects",
          title: (
            <>
              <ProjectOutlined style={iconStyle} />
              <st.NavText>Проекты</st.NavText>
            </>
          ),
        },
        {
          href: "https://t.me/zemscript",
          title: (
            <>
              <BookOutlined style={iconStyle} />
              <st.NavText>Блог</st.NavText>
            </>
          ),
        },
        {
          href: "https://github.com/zemscript",
          title: (
            <>
              <GithubOutlined style={iconStyle} />
              <st.NavText>GitHub</st.NavText>
            </>
          ),
        },
      ]}
    />
    <st.Divider />
  </>
);

export default header;
