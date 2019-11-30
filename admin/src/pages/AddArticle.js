import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import marked from "marked";
import "../styles/addArticle.css";
const { Option } = Select;
const { TextArea } = Input;
function AddArticle(props) {
  const [articleId, setArticleId] = useState(0); // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
  const [articleTitle, setArticleTitle] = useState(""); // 文章的标题
  const [articleContent, setArticleContent] = useState(""); // markdown的编辑内容
  const [markdownContent, setMarkdownContent] = useState("预览内容"); //html内容
  const [introduceMd, setIntroduceMd] = useState(""); //简介的markdown内容
  const [introduceHtml, setIntroduceHtml] = useState("等待编辑"); //简介的html内容
  const [showDate, setShowDate] = useState(""); // 文章发布日期
  const [updateDate, setUpdateDate] = useState(); // 文章的更新日期
  const [typeInfo, setTypeInfo] = useState([]); // 文章类别信息
  const [selectedType, setSelectedType] = useState(1); //选择的文章类别

  marked.setOptions({
    renderer: marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false
  });

  const changeContent = e => {
    const value = e.target.value;
    const html = marked(value);
    setArticleContent(value);
    setMarkdownContent(html);
  };

  const changeIntroduce = e => {
    const value = e.target.value;
    const html = marked(value);
    setIntroduceMd(value);
    setIntroduceHtml(html);
  };

  return (
    <div>
      <Col span={6}>
        <Row>
          <Col span={24}>
            <Button size="large">暂存文章</Button>&nbsp;
            <Button type="primary" size="large" onClick={() => {}}>
              发布文章
            </Button>
            <TextArea
              value={articleContent}
              className="markdown-content"
              rows={35}
              onChange={changeContent}
              onPressEnter={changeContent}
              placeholder="文章内容"
            />
            <div
              className="show-html"
              dangerouslySetInnerHTML={{ __html: markdownContent }}
            ></div>
            <TextArea
              rows={4}
              value={introducemd}
              onChange={changeIntroduce}
              onPressEnter={changeIntroduce}
              placeholder="文章简介"
            />
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: `文章简介：${introduceHtml}` }}
            ></div>
          </Col>
        </Row>
      </Col>
    </div>
  );
}

export default AddArticle;
