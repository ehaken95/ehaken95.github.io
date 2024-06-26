import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";
import '../detail.css'

const MDText = `

# 세종창의학기제 Ⅰ,Ⅱ

GIS를 이용한 N명의 중간위치 측정 어플리케이션

### Member

이름 | 역할
:--: | :--:
서성준 | Android App 개발
남기범 | IOS App 개발
천슬별 | Hybrid App 개발
고정민 | UI/UX 디자인

### Environment

Language | Library | API | Tool
:--: | :--: | :--: | :--:
Java / HTML5 / CSS3 / Javascript / Swift | JQuery / MDL / BootStrap | GoogleMapsAPI / GooglePlacesAPI | Xcode / Android Studio / Adobe illustrator / VS Code

<br>

## 기획

<br>

* N명의 사람들이 모이는 중간지점을 찾아주자

다른 지역에 살고 있는 N명의 사람들이 약속을 잡을 때, 약속 장소를 각각에게 가장 효율적이고 최저 기대비용을 가지는<br>
이른바 중간 지점에서 모일 수 있도록 도움을 주는 프로그램(이하 어플)을 개발하자.'<br>

## 서론

현재 남녀노소 불구하고 모두가 스마트폰 하나씩은 소지하고 있는 시대에 살고 있다.<br>
한국인터넷 진흥원이 발표한 자료에 따르면, 2017년 기준 우리나라 만6세 이상 인구의 89.5%는 스마트폰을 소지하고 있다. 이처럼 대다수의 사람들이 스마트폰을 이용하고, 없어선 안 될 시대이다.<br>
이로 인해 스마트폰을 스마트하게 활용하기 위한 어플리케이션(이하 어플)의 중요성 또한 커지고 있다.<br>

일상생활에 있어서 스마트폰에 대한 의존도가 높아졌고, 스마트폰 이용자가 주로 이용하는 어플의 종류 중, ‘내비게이션 및 지도’ 이용률이 12.5%로서, 큰 비중에 속하는 것으로 나타났다.<br>
이처럼, GIS(Geometry Information Services-위치정보 서비스)는 스마트폰에서 없어서는 안 될 요소 중 하나이다. 위치정보 서비스를 기반으로 만들어진 어플을 찾아볼 수 있는데, <br>
그 중 하나는 사용자들의 약속장소 정하기, 즉 중간좌표를 검색하여 장소를 정해주는 애플리케이션이다.<br>

이러한 어플을 이용해본 결과, 단지 중간좌표만을 검색하는 데에 그쳐 실질적으로 사람들이 이용하기에 불리한 면이 많았다. <br>
심지어, IOS 어플리케이션 시장 내에서는 위치기반 중간좌표 검색 어플이 존재하지 않았다.<br>
이에 기존 어플리케이션들이 제작한 기능을 덧대어, 중간좌표 근처의 가장 가깝고, 사용자가 선택했던 원하는 장소유형을 선택하여 검색한다. <br>
나아가 해당 지점까지 길 찾기를 수행하여 사용자들이 한 번에 이용하기 쉬운 어플을 안드로이드뿐만이 아닌 IOS로도 가능한 멀티 플랫폼을 위한 GIS 어플리케이션을 기획 및 제작하려 한다.

### 관련 연구

다른 지역에 살고 있는 N명의 사람들이 약속을 잡을 때, 약속 장소를 각각에게 가장 효율적이고 최저 기대비용을 가지는 이른바 “중간 지점”에서 모일 수 있도록 도움을 주는 프로그램을 <br>
안드로이드와 IOS플랫폼을 이용하여 개발하는 것이다.<br>
단지 좌표선상  중간 값을 표시하는 것에 그치는 대신, 해당 값을 가장 인근 지하철역으로 좌표를 보정해주는 기능을 추가하여 기존 어플들과의 차별성을 둔다.

![차별성](/projIMG/GIS-App/near-subway.png)

모바일 애플리케이션을 만드는 방법은 네이티브 언어를 사용하는 방법이 대표적이지만 꼭 자바 또는 스위프트를 이용해야만 만들 수 있는 것은 아니다.<br>
안드로이드와 IOS 앱을 한 번에 만들 수 있는 방법도 존재하는데, 대표적으로 코르도바를 이용한 하이브리드 앱과 C#을 이용한 자마린이 있다.<br>
하이브리드 앱으로 만들 경우 구글 지도 API를 적극적으로 활용 가능하기에 GIS 기능을 손쉽게 적용할 수 있다. <br>
하지만 하이브리드 앱의 경우 네이티브 언어로 제작한 어플리케이션보다 성능 면에서 뒤쳐지는 경우가 있다.

### System-Architecture

![시스템 구성도](/projIMG/GIS-App/Sys-Arc.PNG)

※ 구글 Places API에서 JSON파싱을 통해 중간값 근처의 지하철을 검색해주는 시스템을 추가하여 기존 출시되어있는 어플들과의 차별성을 높임.

### 타 어플과의 비교 분석

다음 표는 안드로이드 어플의 “우리어디서 만나?” 길찾기 어플과 본 논문에서 구현한 애플을 수행한 결과를 나타낸다.

![타어플비교](/projIMG/GIS-App/vs-otherapp.PNG)

![타어플비교2](/projIMG/GIS-App/vs-otherapp2.PNG)

기존 어플들이 단지 중간좌표만을 검색한다면, 본 논문에서 제안한 어플은 기존 어플리케이션들이 제작한 기능을 바탕으로, 중간좌표 근처의 가장 가깝고, <br>
사용자가 선택했던 원하는 장소유형을 선택하여 검색한다. 나아가 해당 지점까지 길 찾기를 수행하는 기능까지 추가되어 있다.

## 시연 예시

![시연 예시1](/projIMG/GIS-App/test1.png)

약속을 잡을 인원수를 선택합니다. 최대 6명까지 가능합니다.

![시연 예시2](/projIMG/GIS-App/test2.png)

각각 인원의 위치를 설정합니다. Google Maps를 기반으로 검색 및 선택 가능합니다.

![시연 예시3](/projIMG/GIS-App/test3.png)

최종 결과물입니다. 공유하기 버튼을 이용하여 SNS메신저로 전송할 수 있습니다.

## 기능 구현

<br>
제가 구현한 기능 위주로 작성하였습니다.
<br>

### C class

좌표값과 입력된 사람 수는 여러 페이지에서 사용되기 때문에, 페이지 전환마다 해당 값들을 넘기는 작업이 번거롭고 비효율적이기 때문에 전역 클래스를 생성하여 해당 값들을 저장하였습니다.
\`\`\`java
//C.java

public class C extends Application{
    private Place[] Plc = new Place[6];
    private Location[] Loc = new Location[6];
    private boolean is_search = false;
    private int num_textview = 0;//텍스트뷰의 위치
    private int num_buttonclicked;//어떤 버튼이 눌렸는지 확인
    private int num_people;//몇명의 사람인지 확인
    private boolean[] is_peopleSearchComplete = {false,false,false,false,false,false};
    public Place getPlc(int person){
        return Plc[person];
    }
\`\`\`
<br>

### Google Map

위치를 검색하기 위해 구글 맵API를 사용하였고, 구글 맵뷰를 통하여 위치를 직관적으로 알 수 있게 하였습니다.
\`\`\`java
//MapViewPage.java

public class MapViewPage extends FragmentActivity implements OnMapReadyCallback,GoogleMap.OnMapClickListener, GoogleApiClient.OnConnectionFailedListener {

    private GoogleMap mMap;
    private GoogleApiClient mGoogleApiClient;
    private static final String TAG = "MapViewPage";
    private static final LatLng DEFAULT_LOCATION = new LatLng(37.56, 126.97);

    private static final int PERMISSIONS_REQUEST_ACCESS_FINE_LOCATION = 2002;
    private GoogleMap googleMap = null;
    private MapView mapView = null;
    private GoogleApiClient googleApiClient = null;
    private Marker currentMarker = null;
\`\`\`
맵뷰 실행시 최초로 보여지는 위치를 서울 좌표로 설정하였습니다.
<br>

\`\`\`java
//MapViewPage.java

public void setCurrentLocation(Location location, String markerTitle, String markerSnippet) {
    //장소를 검색했을때, 해당 장소에 마커를 찍음
    if (currentMarker != null) currentMarker.remove();
    Log.i(TAG, "Location :" + location);
    if (location != null) {
        Log.d(TAG, "setCurrentLocation: ");
        //현재위치의 위도 경도 가져옴
        LatLng currentLocation = new LatLng(location.getLatitude(), location.getLongitude());
        MarkerOptions markerOptions = new MarkerOptions();
        markerOptions.position(currentLocation);
        markerOptions.title(markerTitle);
        markerOptions.snippet(markerSnippet);
        markerOptions.draggable(false);
        markerOptions.icon(BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_BLUE));
        currentMarker = this.googleMap.addMarker(markerOptions);
        currentMarker.showInfoWindow();//누르지 않아도 정보창 띄움
        this.googleMap.moveCamera(CameraUpdateFactory.newLatLng(currentLocation));
        return;
    }
    this.googleMap.moveCamera(CameraUpdateFactory.newLatLng(DEFAULT_LOCATION));
}
\`\`\`
PlaceAutoComplete를 이용하여 장소 검색을 한 뒤, 해당 장소에 마커를 표시하며 좌표를 저장합니다.
<br>

\`\`\`java
//MapViewPage.java

Public void onMapClick(LatLng point){

        if (currentMarker != null) currentMarker.remove();
        Log.d(TAG, "setClickCurrentLocation: ");

        //현재 위도와 경도에서 화면 포인트를 알려준다
        Double latitude = point.latitude;
        Double longitude = point.longitude;


        //현재 화면에 찍힌 포인트로부터 위도와 경도를 알려준다.
        final LatLng latLng=new LatLng(latitude,longitude);

\`\`\`
구글 Place에서 검색되지 않는 일부 장소들을 위하여 구글 맵의 특정 위치를 클릭 시, 해당 위치로 설정 및 좌표를 저장할 수 있도록 하였습니다.
<br>
<br>

## 성과

![성과](/projIMG/GIS-App/awards.png)

해당 어플리케이션은 세종대학교 5회 창의설계경진대회에서 우수상을 수상하였습니다.

## Contact
<br>
<a href="https://github.com/ehaken95/Center_Android"  style="color: #5779ff" target="_blank">
<U>Android Source 바로가기</U></a>

<br>email : seojj95@naver.com
<br>
<br>by 서성준, 남기범, 천슬별, 고정민
<br>"본 연구는 과학기술정보통신부 및 정보통신기술진흥센터의 SW중심대학 사업의 연구결과로 수행되었음"(2015-0-00938)

`

const Chang2018 = () => {
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

export default Chang2018
