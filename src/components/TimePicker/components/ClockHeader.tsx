import classNames from "classnames";
import { DateTime } from "luxon";

import { ReactComponent as ColonIcon } from "../images/colon.svg";

import { getMeridiem, ClockType } from "src/components";

interface Props {
  clockType: ClockType;
  date: DateTime;
  onDateChange: (dateTime: DateTime) => void;
  onClockTypeChange: (clock: ClockType) => void;
}



export const ClockHeader = ({
  date,
  clockType,
  onDateChange,
  onClockTypeChange,
}: Props) => {
  return (
    <div className="mb-4 flex items-center justify-center gap-2">
      <div className="flex items-center gap-2">
        <div
          className={classNames(
            "flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-md text-[32px]",
            clockType === "hour"
              ? "bg-[#F2F8FB] text-[#036DB7]"
              : "bg-[#F9FBFB] text-[#242E40]"
          )}
          onClick={() => {
            if (clockType !== "hour") {
              onClockTypeChange("hour");
            }
          }}
        >
          {date.toFormat("hh")}
        </div>
        <ColonIcon />
        <div
          className={classNames(
            "flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-md text-[32px]",
            clockType === "min"
              ? "bg-[#F2F8FB] text-[#036DB7]"
              : "bg-[#F9FBFB] text-[#242E40]"
          )}
          onClick={() => {
            if (clockType !== "min") {
              onClockTypeChange("min");
            }
          }}
        >
          {date.toFormat("mm")}
        </div>
      </div>

      <div role="group" className="flex flex-col rounded-md">
        <button
          className={classNames(
            "h-[28px] w-[32px] rounded-tl-[4px] rounded-tr-[4px] border border-[#BAC7D5] text-[12px] font-semibold outline-none",
            getMeridiem(date) == "am"
              ? "bg-[#F2F8FB] text-[#036DB7]"
              : "bg-white text-[#D0D5DD]"
          )}
          onClick={() => {
            if (getMeridiem(date) !== "am") {
              onDateChange(date.minus({ hour: 12 }));
            }
          }}
        >
          AM
        </button>
        <button
          className={classNames(
            "h-[28px] w-[32px] rounded-bl-[4px] rounded-br-[4px] border border-t-0 border-[#BAC7D5] text-[12px] font-semibold outline-none",
            getMeridiem(date) == "pm"
              ? "bg-[#F2F8FB] text-[#036DB7]"
              : "bg-white text-[#D0D5DD]"
          )}
          onClick={() => {
            if (getMeridiem(date) !== "pm") {
              onDateChange(date.plus({ hour: 12 }));
            }
          }}
        >
          PM
        </button>
      </div>
    </div>
  );
};
