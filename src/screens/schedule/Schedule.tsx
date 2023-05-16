import { useState } from 'react';
import { getHours } from 'date-fns';

// COMPONENTS
import { View, TouchableOpacity } from 'react-native';
import DefaultText from '../../components/default-text/DefaultText';
import Header from '../../components/header';
import ActionButton from '../../components/action-button';

// STYLES
import styles from './styles';

// TYPES
type ScheduleProps = {
  navigation: any;
};

enum ScheduleDay {
  workingDays,
  saturday,
  sunday,
}

enum DayPhases {
  morning,
  afternoon,
  night,
}

export default function Schedule({ navigation }: ScheduleProps) {
  const [scheduleSelected, setScheduleSelected] = useState<ScheduleDay>(
    ScheduleDay.workingDays
  );

  const onSelectSchedule = (schedule: ScheduleDay) => () => {
    setScheduleSelected(schedule);
  };

  function getPhasesOfDay() {
    const currentHour = getHours(new Date());
    if (currentHour >= 4 && currentHour < 12) return DayPhases.morning;

    if (currentHour >= 12 && currentHour < 18) return DayPhases.afternoon;

    return DayPhases.night;
  }

  function toggleRangeHours(
    dayPhase: DayPhases,
    defaultStyles: 'phasesDay' | 'hoursRange',
    selectedStyles: 'phasesDaySelected' | 'hoursRangeSelected'
  ) {
    const currentPhase = getPhasesOfDay();

    if (currentPhase === dayPhase) {
      const selected: any = {
        ...styles[defaultStyles],
        ...styles[selectedStyles],
      };
      return selected;
    }

    return styles[defaultStyles];
  }

  function toggleColors(
    schedule: ScheduleDay,
    defaultStyle: 'dayLabel' | 'dayButton',
    selectedStyle: 'dayLabelSelected' | 'dayButtonSelected'
  ) {
    if (scheduleSelected === schedule) {
      const selectedStyles: any = {
        ...styles[defaultStyle],
        ...styles[selectedStyle],
      };

      return selectedStyles;
    }

    return styles[defaultStyle];
  }

  function renderHours(dayPhase: DayPhases) {
    const hours = [
      '06:45 - 07:35',
      '06:45 - 07:35',
      '06:45 - 07:35',
      '06:45 - 07:35',
      '06:45 - 07:35',
      '06:45 - 07:35',
      '06:45 - 07:35',
    ];

    return hours.map((hour, key) => (
      <DefaultText
        style={toggleRangeHours(dayPhase, 'hoursRange', 'hoursRangeSelected')}
        key={dayPhase + key}
      >
        {hour}
      </DefaultText>
    ));
  }

  return (
    <View style={styles.container}>
      <Header title="Horários" navigation={navigation} />

      <View style={styles.body}>
        <DefaultText style={styles.route}>Linha 104 - Centro</DefaultText>

        <View style={{ ...styles.buttonGroup, marginBottom: 27 }}>
          <TouchableOpacity
            onPress={onSelectSchedule(ScheduleDay.workingDays)}
            style={toggleColors(
              ScheduleDay.workingDays,
              'dayButton',
              'dayButtonSelected'
            )}
          >
            <DefaultText
              style={toggleColors(
                ScheduleDay.workingDays,
                'dayLabel',
                'dayLabelSelected'
              )}
            >
              Dias úteis
            </DefaultText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onSelectSchedule(ScheduleDay.saturday)}
            style={toggleColors(
              ScheduleDay.saturday,
              'dayButton',
              'dayButtonSelected'
            )}
          >
            <DefaultText
              style={toggleColors(
                ScheduleDay.saturday,
                'dayLabel',
                'dayLabelSelected'
              )}
            >
              Sábado
            </DefaultText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onSelectSchedule(ScheduleDay.sunday)}
            style={toggleColors(
              ScheduleDay.sunday,
              'dayButton',
              'dayButtonSelected'
            )}
          >
            <DefaultText
              style={toggleColors(
                ScheduleDay.sunday,
                'dayLabel',
                'dayLabelSelected'
              )}
            >
              Domingo
            </DefaultText>
          </TouchableOpacity>
        </View>

        <View style={styles.hoursGroup}>
          <View style={styles.hoursList}>
            <View
              style={toggleRangeHours(
                DayPhases.morning,
                'phasesDay',
                'phasesDaySelected'
              )}
            >
              <DefaultText style={styles.phasesDayLabel}>Manhã</DefaultText>
            </View>
            {renderHours(DayPhases.morning)}
          </View>

          <View style={styles.hoursList}>
            <View
              style={toggleRangeHours(
                DayPhases.afternoon,
                'phasesDay',
                'phasesDaySelected'
              )}
            >
              <DefaultText style={styles.phasesDayLabel}>Tarde</DefaultText>
            </View>
            {renderHours(DayPhases.afternoon)}
          </View>

          <View style={styles.hoursList}>
            <View
              style={toggleRangeHours(
                DayPhases.night,
                'phasesDay',
                'phasesDaySelected'
              )}
            >
              <DefaultText style={styles.phasesDayLabel}>Noite</DefaultText>
            </View>
            {renderHours(DayPhases.night)}
          </View>
        </View>

        <ActionButton
          containerStyle={styles.seeOnMap}
          onPress={() => console.log('action button')}
          label="Ver rota no mapa"
        />
      </View>
    </View>
  );
}
