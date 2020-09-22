import React from "react";
import Heatmap from "react-calendar-heatmap";
import { subYears, isBefore, isSameDay, addDays } from "date-fns";

import { Container } from "./styles";

type HeatmapValue = { date: Date; count: number }; //date = data do calendário, count = quanto que a pessoa contribuiu naquele dia
export default function RandomCalendar() {
  const startDate = subYears(new Date(), 1); //Subtraindo 1 ano da nossa data atual
  const endDate = new Date(); //O dia de hoje

  return (
    <Container>
      <div className="wrapper">
        <Heatmap
          startDate={startDate}
          endDate={endDate}
          values={generateHeatmapValues(startDate, endDate)}
          gutterSize={3.5} //Tamanho dos quadradinhos
          classForValue={(item: HeatmapValue) => {
            let clampedCount = 0;

            if (item !== null) {
              clampedCount = Math.max(item.count, 0);
              clampedCount = Math.min(item.count, 4);
            }

            return `scale-${clampedCount}`;
          }}
          showWeekdayLabels //Mostra os dias da semana
        />
      </div>

      <span>Random Calendar (do not represent actual data)</span>
    </Container>
  );
}

const generateHeatmapValues = (startDate: Date, endDate: Date) => {
  const values: HeatmapValue[] = [];

  let currentDate = startDate;
  //Enquanto não chegar no fim a gente vai manter esse loop, caso contrária ele chegue no dia final(dia atual seja o mesmo que o dia final) eu também vou querer que ele mantenha o loop
  while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
    const count = Math.random() * 4; //0 a 4 por causa da escala das cores no CSS

    values.push({ date: currentDate, count: Math.round(count) });

    currentDate = addDays(currentDate, 1); //Nossa data atual vai ser a data de hoje adicionando 1 dia
  }

  return values;
};
