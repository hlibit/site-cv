import Row from "../../ui/Row";
import AboutDetail from "./AboutDetail";

function AboutMeSection({ data }) {
  return (
    <div className="mt-auto flex max-h-full w-full max-w-[600px] flex-col gap-6 overflow-auto">
      <div className="text-sm font-normal leading-7 tracking-wider text-text-primary">
        Я присвятив багато років навчанню та самовдосконаленню. В університеті я
        навчився дисципліні, відповідальності та вмінню виконувати поставлені
        задачі. Прикладом цього є здобута кваліфакація "магістр" європейської
        програми. Вже 2 роки я вивчаю тонкощі, методики, паттерни в
        програмуванні, бо жага до знань нікуди не зникла. Я бачу себе в IT та
        маю великі цілі та задачі, які неодмінно реалізую.
      </div>
      <div className="grid grid-cols-1 grid-rows-6 gap-1 sm:gap-4 md:grid-rows-3 lg:grid-cols-2">
        {data.map((detail) => {
          return (
            <AboutDetail key={detail.itemLabel} label={detail.itemLabel}>
              {detail.itemValue}
            </AboutDetail>
          );
        })}
      </div>
    </div>
  );
}

export default AboutMeSection;
