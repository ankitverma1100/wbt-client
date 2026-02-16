import { useNavigate } from "react-router-dom";
import "./style.scss";
import { useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";
import moment from "moment";
import { useGetUserchpdtlMutation } from "../../store/service/userServices/userServices";

/* ===============================
   ICONS
================================ */
const LeftIcon = () => (
    <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
        <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" />
    </svg>
);

const RightIcon = () => (
    <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
        <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" />
    </svg>
);

const DownArrowIcon = () => (
    <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
        <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" />
    </svg>
);

const SearchIcon = () => (
    <svg viewBox="64 64 896 896" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="40">
        <path d="M909.6 854.5L649.9 594.8C690.2 542.7 714 478.8 714 408 714 244.6 579.4 110 416 110S118 244.6 118 408s134.6 298 298 298c70.8 0 134.7-23.8 186.8-64.1l259.7 259.7c7.2 7.2 18.9 7.2 26.1 0l24.1-24c7.2-7.2 7.2-18.9 0-26.1z"></path>
    </svg>
);

const EmptyIcon = () => (
    <div className="ant-empty-image">
        <svg width="64" height="41" viewBox="0 0 64 41">
            <g transform="translate(0 1)" fill="none" fillRule="evenodd">
                <ellipse fill="#f5f5f5" cx="32" cy="33" rx="32" ry="7" />
                <g fillRule="nonzero" stroke="#d9d9d9">
                    <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" />
                    <path
                        d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                        fill="#fafafa"
                    />
                </g>
            </g>
        </svg>
    </div>
);

type FilterType = "All" | "PNL" | "Account";

interface AccountStatementItem {
    date: string;
    description: string;
    credit: number;
    debit: number;
    closing: number;
    prev?: number;
    comm?: number;
    balance?: number;
}

interface AccountStatementResponse {
    status: boolean;
    message: string | null;
    data: AccountStatementItem[];
}

const filterOptions: FilterType[] = ["All", "PNL", "Account"];
const pageSizes = [10, 20, 50, 100];

const toNumber = (value: number | null | undefined) => {
    if (typeof value === "number") return value;
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
};

const formatAmount = (value: number | null | undefined) =>
    toNumber(value).toFixed(2);

const getBalanceValue = (item?: AccountStatementItem) =>
    item?.balance ?? item?.closing ?? 0;

interface StatementRowProps {
    item: AccountStatementItem;
    nextItem?: AccountStatementItem;
}

const StatementRow = ({ item, nextItem }: StatementRowProps) => (
    <tr>
        <td className="date bold">
            {moment(item.date).format("DD MMM YYYY hh:mm A")}
        </td>
        <td className="desc bold">
            <span className="ellipsis">{item.description}</span>
        </td>
        <td className="green bold text-center">
            {formatAmount(getBalanceValue(nextItem))}
        </td>
        <td className="green bold text-center">{formatAmount(item.credit)}</td>
        <td className="red text-center">{formatAmount(item.debit)}</td>
        <td className="green text-center">{formatAmount(item.comm)}</td>
        <td className="bold text-center">
            {formatAmount(getBalanceValue(item))}
        </td>
    </tr>
);

interface PageSizeSelectProps {
    rowsPerPage: number;
    setRowsPerPage: (value: number) => void;
}

const PageSizeSelect = ({ rowsPerPage, setRowsPerPage }: PageSizeSelectProps) => {
    const [pageSizeOpen, setPageSizeOpen] = useState(false);
    const [pageInput, setPageInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const filteredPageSizes = useMemo(
        () => pageSizes.filter((n) => pageInput.includes(n.toString())),
        [pageInput]
    );

    return (
        <div className={`page-size-select ${pageSizeOpen ? "open" : ""}`}>
            <input
                value={pageInput}
                onFocus={() => setPageSizeOpen(true)}
                onChange={(e) => {
                    const val = e.target.value;
                    setPageInput(val);
                    setIsTyping(val.length > 0);
                }}
                onBlur={() => {
                    setPageSizeOpen(false);
                    setIsTyping(false);
                    setPageInput("");
                }}
            />

            {!isTyping && (
                <span className="page-size-placeholder">
                    {rowsPerPage} / PAGE
                </span>
            )}

            <span className="page-size-icon">
                {pageSizeOpen ? <SearchIcon /> : <DownArrowIcon />}
            </span>

            {pageSizeOpen && (
                <ul className="page-size-dropdown">
                    {!isTyping ? (
                        pageSizes.map((n) => (
                            <li
                                key={n}
                                className={rowsPerPage === n ? "active" : ""}
                                onMouseDown={() => {
                                    setRowsPerPage(n);
                                    setPageInput("");
                                    setPageSizeOpen(false);
                                }}
                            >
                                {n} / PAGE
                            </li>
                        ))
                    ) : filteredPageSizes.length ? (
                        filteredPageSizes.map((n) => (
                            <li
                                key={n}
                                onMouseDown={() => {
                                    setRowsPerPage(n);
                                    setPageInput("");
                                    setPageSizeOpen(false);
                                }}
                            >
                                {n} / PAGE
                            </li>
                        ))
                    ) : (
                        <li className="page-size-empty">
                            <EmptyIcon />
                            <span>NO DATA</span>
                        </li>
                    )}
                </ul>
            )}
        </div>
    );
};

const Statement = () => {
    const nav = useNavigate();

    const [filterType, setFilterType] = useState<FilterType>("All");

    const [dateRange, setDateRange] = useState<[string, string]>([
        dayjs().subtract(7, "day").format("YYYY-MM-DD"),
        dayjs().format("YYYY-MM-DD"),
    ]);

    const [trigger, { data }] = useGetUserchpdtlMutation();

    const [rowsPerPage, setRowsPerPage] = useState(50);

    useEffect(() => {
        const detailTypeMap = {
            All: "ALL",
            PNL: "PNL",
            Account: "ACCOUNT",
        } as const;

        trigger({
            detailType: detailTypeMap[filterType],
            fromDate: dateRange[0],
            toDate: dateRange[1],
            userId: "",
        });
    }, [filterType, dateRange, trigger]);

    const response = data as AccountStatementResponse | undefined;
    const activeData = Array.isArray(response?.data) ? response.data : [];
    const totals = useMemo(() => {
        return activeData.reduce(
            (acc, item) => {
                acc.credit += toNumber(item.credit);
                acc.debit += toNumber(item.debit);
                acc.total += toNumber(getBalanceValue(item));
                return acc;
            },
            { credit: 0, debit: 0, total: 0 }
        );
    }, [activeData]);

    return (
        <main className="statement-page">

            {/* HEADER */}
            <div className="statement-header">
                <h1>MY ACCOUNT STATEMENT ({activeData.length})</h1>
            </div>

            {/* FILTER */}
            <div className="statement-filter-card">
                <div className="filter-buttons">
                    {filterOptions.map((t) => (
                        <button
                            key={t}
                            className={`filter-btn ${filterType === t ? "active" : ""}`}
                            onClick={() => setFilterType(t)}
                        >
                            {t === "PNL" ? "P&L" : t}
                        </button>
                    ))}
                </div>
                {/* <RangePicker value={[dayjs().subtract(7, "day"), dayjs()]} /> */}
            </div>

            {filterType === "Account" && (
                <div className="account-summary">
                    <span className="credit-cell">
                        CREDIT: {formatAmount(totals.credit)}
                    </span>
                    <span className="debit-cell">
                        DEBIT: {formatAmount(totals.debit)}
                    </span>
                    <span className="total-cell">
                        TOTAL: {formatAmount(totals.total)}
                    </span>
                </div>
            )}

            <div className="outer-table">
                {/* TABLE */}
                <div className="statement-table-card">
                    <div className="table-responsive">
                        <table className="statement-table table">

                            {/* EQUAL COLUMN WIDTH SETUP */}
                            <colgroup>
                                <col className="big-th" /> {/* DATE */}
                                <col className="big-th" /> {/* DESCRIPTION */}

                                <col className="small-th" /> {/* PREV. BAL. */}
                                <col className="small-th" /> {/* CREDIT */}
                                <col className="small-th" /> {/* DEBIT */}
                                <col className="small-th" /> {/* COMM+ */}
                                <col className="small-th" /> {/* BALANCE */}
                            </colgroup>

                            <thead>
                                <tr>
                                    <th className="text-start">DATE</th>
                                    <th className="text-start">DESCRIPTION</th>
                                    <th className="text-center">PREV. BAL.</th>
                                    <th className="text-center">CREDIT</th>
                                    <th className="text-center">DEBIT</th>
                                    <th className="text-center">COMM+</th>
                                    <th className="text-center">BALANCE</th>
                                </tr>
                            </thead>

                            <tbody>
                                {activeData.length === 0 ? (
                                    <tr>
                                        <td colSpan={7} className="statement-empty">
                                            NO DATA AVAILABLE
                                        </td>
                                    </tr>
                                ) : (
                                    activeData.map((item, i) => (
                                        <StatementRow
                                            key={`${item.date}-${i}`}
                                            item={item}
                                            nextItem={activeData[i + 1]}
                                        />
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                </div>
                {/* PAGINATION (OUTSIDE TABLE) */}
                <div className="ant-pagination-wrapper">
                    <ul className="ant-pagination">
                        <li className="ant-pagination-total-text">
                            1-1 OF {activeData.length} ITEMS
                        </li>

                        <li className="ant-pagination-prev disabled">
                            <button disabled><LeftIcon /></button>
                        </li>

                        <li className="ant-pagination-item active">
                            <a>1</a>
                        </li>

                        <li className="ant-pagination-next disabled">
                            <button disabled><RightIcon /></button>
                        </li>

                        <li className="ant-pagination-options">
                            <PageSizeSelect
                                rowsPerPage={rowsPerPage}
                                setRowsPerPage={setRowsPerPage}
                            />
                        </li>
                    </ul>
                </div>
            </div>


            {/* FOOTERS */}
            {[1, 2].map((i) => (
                <div className="statement-footer" key={i}>
                    <button onClick={() => nav(-1)}>Back To Main Menu</button>
                </div>
            ))}
        </main>
    );
};

export default Statement;
