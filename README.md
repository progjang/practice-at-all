# Next.js 졸업 과제

배포 URL: https://practice-at-all.vercel.app/

온라인 서점 UI를 참고하려 했으나, 챌린지 예시 이미지처럼 하나의 페이지 자체가 카테고리 목록인 사이트가 많지 않았습니다.

제가 알고 있는 사이트 중에서 카테고리를 하나의 페이지로 구성한 사이트는 스포티파이가 있었습니다.

`'/'`에 해당하는 Home 페이지는 스포티파이의 검색 페이지를 참고해서 만들었습니다.

`'/list/[listName]'`에 해당하는 페이지는 일본 잡지 사이트인 매거진하우스를 참고했습니다.

# 버셀 배포시 발생한 문제 해결

[How do I resolve a 'module not found' error?](https://vercel.com/guides/how-do-i-resolve-a-module-not-found-error)

에러 메시지: Module not found: Can't resolve '../components/navigation'

상황

- 로컬에서는 `npm run build`를 해도 에러가 발생하지 않았는데, 버셀 배포시 실행되는 npm run build에서만 Module not found 에러가 발생하는 상황.

원인

- 버셀 배포는 대소문자를 구분하는 파일 시스템을 사용

해결 과정

1. 터미널에 아래 명령어를 입력하고 값을 확인한다.

```sh
git config --get core.ignorecase
```

2. `core.ignorecase`가 `true`로 설정되어 있다면 아래 명령어를 입력하여 `false`로 변경한다.

```sh
git config core.ignorecase false
```

3. 아래 명령어를 입력하여 설정이 적용되었는지 확인한다.

```sh
git config --get core.ignorecase
```
