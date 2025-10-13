import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function TopInfoHeader() {
  return (
    <div className="bg-gradient-to-r from-brand to-brand-hover text-white text-sm hidden lg:block fixed top-0 left-0 w-full z-[60] border-b border-brand/30">
          <div className="max-w-[1440px] mx-auto flex justify-between items-center h-[42px] px-4 sm:px-6 lg:px-8">
        {/* Email */}
        <div className="flex items-center">
          <a
            href="mailto:shearercarpentry@gmail.com"
            className="flex items-center gap-2 hover:text-gray-200 transition-colors duration-200 group"
          >
            <div className="bg-white/10 rounded-full p-1.5 group-hover:bg-white/20 transition-colors">
              <FaEnvelope className="text-white text-[12px]" />
            </div>
            <span className="text-[13px] font-medium">shearercarpentry@gmail.com</span>
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-6">
          <a
            href="tel:7632453755"
            className="flex items-center gap-2 hover:text-gray-200 transition-colors duration-200 group"
          >
            <div className="bg-white/10 rounded-full p-1.5 group-hover:bg-white/20 transition-colors">
              <FaPhoneAlt className="text-white text-[12px]" />
            </div>
            <span className="text-[13px] font-medium">(763) 245-3755</span>
          </a>
        </div>
      </div>
    </div>
  );
}
