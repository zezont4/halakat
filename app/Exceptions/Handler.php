<?php namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Session\TokenMismatchException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that should not be reported.
     *
     * @var array
     */
    protected $dontReport = [
        'Symfony\Component\HttpKernel\Exception\HttpException'
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception $e
     * @return void
     */
    public function report(Exception $e)
    {
        return parent::report($e);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Exception $e
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $e)
    {
        // If the request wants JSON (AJAX doesn't always want JSON)
//        if ($request->wantsJson()) {
        if ($request->ajax() || $request->wantsJson()) {
            // Define the response
            $response['error'] = '[ Laravel Handler ] ' . 'عفوا ... حدث خطأ';

            // Default response of 400
            $status = 400;

            // If this exception is an instance of HttpException
            if ($e instanceof TokenMismatchException) {
                $status = 403;
                $response['error'] = 'لدواعي أمنية، فضلا قم بتحديث الصفحة.';
            }

            if ($this->isHttpException($e)) {
                // Grab the HTTP status code from the Exception
                $status = $e->getStatusCode();
            }

            // If the app is in debug mode
            if (config('app.debug')) {
                // Add the exception class name, message and stack trace to response
                $response['exception'] = get_class($e); // Reflection might be better here
                $response['message'] = $e->getMessage();
                $response['trace'] = $e->getTrace();
            }
            // Return a JSON response with the response array and status code
            return response()->json($response, $status);
        }

        if ($this->isHttpException($e)) {
            return $this->renderHttpException($e);
        }


        if (config('app.debug')) {
            return $this->renderExceptionWithWhoops($e);
        }

        return parent::render($request, $e);
    }

    /**
     * Render an exception using Whoops.
     *
     * @param  \Exception $e
     * @return \Illuminate\Http\Response
     */
    protected function renderExceptionWithWhoops(Exception $e)
    {
        $whoops = new \Whoops\Run;
        $whoops->pushHandler(new \Whoops\Handler\PrettyPageHandler());

        return new \Illuminate\Http\Response(
            $whoops->handleException($e),
            $e->getStatusCode(),
            $e->getHeaders()
        );
    }
}
