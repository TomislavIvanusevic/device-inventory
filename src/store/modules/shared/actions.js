// import { ReservationService } from '@/common/api.service';
// import {
//     FETCH_RESERVATIONS,
//     // FETCH_RESERVATION,
// } from '@/store/actions.type';
// import {
//     CHANGE_RESERVATIONS,
//     // CHANGE_RESERVATION,
// } from '@/store/mutations.type';

// export default {
//     [FETCH_RESERVATIONS]({ commit }, params) {
//         return ReservationService.query(params.type, params.filters)
//             .then(({ data }) => {
//                 commit(CHANGE_RESERVATIONS, data);
//             })
//             .catch((error) => {
//                 throw new Error(error);
//             });
//     },
// };
