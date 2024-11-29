import man from '../assets/manpower.png';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-8 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-semibold">Copyright Notice ©</h3>
            <p className="text-sm text-gray-200 max-w-3xl">
              All Rights Reserved. The content of this website is protected by copyright law. Unauthorized copying,
              reproduction, distribution, or any other use of the materials without explicit permission is prohibited.
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold">저작권 고지 ©</h3>
            <p className="text-sm text-gray-200 max-w-3xl">
              모든 권리 보유. 이 웹사이트의 콘텐츠는 저작권법에 의해 보호됩니다. 명시적인 허가 없이 자료를 
              복제, 복사, 배포하거나 기타 용도로 사용하는 것은 금지됩니다.
            </p>
          </div>
        </div>
        
        <div className="mt-8 flex justify-end items-center space-x-2">
          <span className="text-sm font-semibold whitespace-nowrap">
            Military Manpower Administration
          </span>
          <div className="w-20 h-8 rounded-full" aria-hidden="true" ><img src={man} alt="Image 2" className="w-20 h-12" /></div>
        </div>
      </div>
      <div className="absolute left-0 top-0 w-40 h-full bg-blue-950 transform skew-x-12 origin-bottom-right -translate-x-1/4" aria-hidden="true" />
    </footer>
  )
}

