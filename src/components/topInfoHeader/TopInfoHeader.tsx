import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function TopInfoHeader() {
  return (
    <div className="bg-gradient-to-r from-brand to-brand-hover text-white text-sm hidden lg:block fixed top-0 left-0 w-full z-[60] border-b border-brand/30">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center h-[42px] px-4 sm:px-6 lg:px-8 xl:px-2">
        {/* Address */}
        <div className="flex items-center">
          <div className="flex items-center gap-2 pr-6 border-r border-gray-700">
            <FaMapMarkerAlt className="text-white text-[15px]" />
            <span className="text-[13px] font-medium text-gray-100 hover:text-white transition-colors">
              14322 21st Avenue North Plymouth, Minnesota, 55447
            </span>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-6">
          <a
            href="tel:+15073387200"
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
