using {cuid} from '@sap/cds/common';

namespace hcr.mpc.bookshop;

entity Books : cuid {
    key ID    : UUID;
        title : String;
        stock : Integer;
}
