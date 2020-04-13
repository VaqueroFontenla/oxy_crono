import moment from "moment";

export const mapFormToApi = (values) => {
    const data= {
        flow: values.flow,
        name: values.name,
        volume: values.volume,
        bed: values.bed,
        press: values.press,
        start: parseInt(moment(values.start).format('x')),
      }
      return data
}