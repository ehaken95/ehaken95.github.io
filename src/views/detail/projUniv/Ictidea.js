import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";
import '../detail.css'

const MDText = `

# 세종대학교 ICT 아이디어 공모전

과거의 인물이 되어 타임머신을 타고 현재로 온다면, 어떤 기술이 필요할지, 그에 맞는 기술을 찾아 논리적으로 서술한다.

### Member

이름 | 역할
:--: | :--:
서성준 | 자료조사
임동혁 | Drone시연
김신욱 | AUTOCAD 디자인
이중혁 | 자료조사
<br>

### 주제 시나리오 (공모전을 위한 주제 시나리오 제작)

저는 조선시대에 살고 있는 지리학자 고산자 김정호 입니다. 저는 사실 운동을 싫어합니다. <br>
겨울에 따듯한 아랫목에서 귤까먹는 것을 제일 좋아합니다. 밖에 나가서 걷고, 등산을하고, 강을 건너는 일을 사실 진심으로 싫어합니다.<br>
하지만 정확한 대한민국의 지도를 만들기 위해서는 직접 일일이 발로 뛰어다니며 직접 지리를 확인하고 지도를 제작하여야 합니다. <br>
그래서 그런지 지도제작 속도가 지지부진해지고 점점 지도에 대한 흥미가 떨어집니다. 발길이 닿기 힘든 곳은 정확하게 측정을 할 수 없기 때문에, 잘못된 지리 정보도 있습니다.<br>
이런 상황에서 만약에 제가(김정호) 오늘날의 기술을 사용할 수 있다면, 편한 건물 안에서 VR카메라가 부착된 드론을 이용하여 편하게 촬영을 하고, <br>
직접 VR로 실사를 보면서 정확한 지리정보가 들어간 지도를 제작할 것입니다.


### 주제 목표 및 기대효과
* 드론을 이용하여 한반도 전체 지형지도(대동여지도)를 더 편리하게 제작할 수 있다.
* 드론에 부착된 VR카메라를 이용해 직접 지형을 찾아가서 기록했던 불편함을 덜 수 있다.


### 주제 필요성 및 배경

* 지도가 없던 당시 시민들의 불편함을 덜어주고 한반도의 지형을 한눈에 알 수 있다.
* 산이나 계곡 등 사람이 접근하기 위험한 곳을 드론이 대신 세밀하게 촬영하여 위험을 덜 수 있다.
* 직접 도보로 걸어가는 것 대신 드론을 통하여 더 빠르고 정확하게 지도제작을 할 수 있다.
* 3D Mapping 기술을 이용하여 한반도 지형을 한눈에 파악할 수 있다.
* VR기술을 이용하여 3D로 표현된 한반도 지형을 좀 더세밀하게 기록할 수 있다.

## 제품 설명

### VR드론

![VR드론](/projIMG/ICT/vrdrone.PNG)


vr로 사용자가 드론이 보는 시야를 직접 눈앞에서 보듯 체험할 수 있으며 내장되어 있는 3D맵핑 기능을 통해서 지도를 구현할 수 있다.

### 예시화면

![예시](/projIMG/ICT/example.PNG)


## 기술 설명

### 1.촬영용 드론

![설계도](/projIMG/ICT/dronecad.PNG)

CAD를 이용한 가상의 VR드론 설계도

VR 드론은 드론에 장착된 카메라가 촬영한 영상을 드론 조종자가 쓴 헤드셋에 실시간으로 전송하는 형태다. <br>
이를 통해 드론 조종자는 인간의 시점으로는 볼 수 없는 각종 풍경을 즐길 수 있을 뿐만 아니라 흡사 자신이 하늘을 나는 듯한 느낌까지 얻는다. <br>
충분한 비행 시간 을 가지는 고용량 배터리 드론이 매달고 이륙할 수 있을 정도로 작고 가벼운 고화질의 카메라 흔들림과 진동이 없는 안정적인 화면을 위한 중심 교정 장치인 짐벌이 필요하다.

### 2.VR 기술

VR은 인간의 모든 감각을 사용하여, 실제처럼 느낄 수 있는 통합된 경험을 지칭한다. <br>
즉, Hologram, VR 및 AR 등 기술적으로 구분되는 모든 것들이 사실상 VR인 것이다. <br>
이러한 VR을 시장에서는 구현 기술에 따라 VE(Virtual Environment), AR(AugmentedReality), AV(Augmented Virtuality), SR(Substitutional Reality) 및 MR(Mixed Reality) 등으로 구분하기도 한다.

### 3.3D맵핑 기술

![3D맵핑기술](/projIMG/ICT/3dmapping.PNG)


라이브 드론맵 접근이 불가능한 지역에 드론을 띄워 지도를 구축하고 이를 실시간으로 확인할 수 있는 기술이다. <br>
현장에 띄워진 드론을 통해 공간정보를 취득해 전송하면 자동 매핑(mapping)해 멀리 떨어진 곳에서도 실시간으로 현장을 확인 가능하다.<br>
우선 고정밀 위치센서를 부착한 드론이 지정경로를 따라 자동 비행(약 5㎞)하면서 촬영한 영상과 센서 정보를 전송하면, '드론 기반 자동지도구축 통합 소프트웨어(SW)'가 정보를 보정해 공간정보를 생성한다. <br>
이렇게 생성된 공간정보를 3차원(3D)으로 가시화해 사용자가 지역상황을 실시간으로 파악할 수 있게 된다.

## 성과

![성과](/projIMG/ICT/ictawards.PNG)

명확한 주제를 가지고 제출한 아이디어가 본 공모전에서 최우수상을 수상하였습니다.

## Contact

> email : seojj95@naver.com
>
> by 서성준, 임동혁, 김신욱, 이중혁



`

const Ictidea = () => {
  return (
    /*<ReactMarkdown remarkPlugins={[remarkGfm]}>{MDText}</ReactMarkdown>*/
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return inline ? (
            // 강조 (``)
            <code
              style={{
                background:
                  "linear-gradient( to right, var(--sub-highlight-color) 15%, var(--highlight-color) 85%, var(--sub-highlight-color) )",
                padding: "2px",
                borderRadius: "3px",
              }}
              {...props}
            >
              {children}
            </code>
          ) : match ? (
            // 코드 (```)
            <SyntaxHighlighter
              style={nord}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children)
                .replace(/\n$/, "")
                .replace(/\n&nbsp;\n/g, "")
                .replace(/\n&nbsp\n/g, "")}
            </SyntaxHighlighter>
          ) : (
            <SyntaxHighlighter
              style={nord}
              language="textile"
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          );
        },
        // 인용문 (>)
        blockquote({ node, children, ...props }) {
          return (
            <div
              style={{
                background: "#f0f0f0",
                padding: "1px 15px",
                borderRadius: "10px",
              }}
              {...props}
            >
              {children}
            </div>
          );
        },
        /*img({ node, ...props }) {
          return (
            <img
              style={{ maxWidth: "60vw" }}
              alt="MarkdownRenderer__Image"
            />
          );
        },*/
        em({ node, children, ...props }) {
          return (
            <span style={{ fontStyle: "italic" }} {...props}>
                    {children}
                  </span>
          );
        },
      }}
    >
      {MDText
        .replace(/\n\s\n\s/gi, "\n\n&nbsp;\n\n")
        .replace(/\*\*/gi, "@$_%!^")
        .replace(/@\$_%!\^/gi, "**")
        .replace(/<\/?u>/gi, "*")}
    </ReactMarkdown>
  )
}

export default Ictidea
